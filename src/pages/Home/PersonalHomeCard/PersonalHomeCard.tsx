import CSSModules from "react-css-modules";
import { useNavigate } from "react-router-dom";
import Card from "../../../components/Card/Card";
import {
  selectCommunityData,
  selectCommunityModalState,
  toggleCommunityModalState,
} from "../../../features/subreddit/subredditSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import styles from "./PersonalHomeCard.module.css";
import { useEffect, useState } from "react";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db, getUserId } from "../../../firebase";
import ReactApexChart from "react-apexcharts";
import moment from "moment";

const PersonalHomeCard: React.FC = () => {
  const [posts, setPosts] = useState<any | []>([])

  const options = {
    chart: {
      height: 350,
      // type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: 'top',
        },
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: any) {
        return val;
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["#304758"]
      }
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      position: 'bottom',
    },
  }

  const series = [{
    name: 'Posts',
    data: posts.length === 0 ? [0, 0, 0, 0, 0, 0, 0] : posts
  }]

  useEffect(() => {
    async function getLastWeekPosts() {
      const posts = collection(db, "posts");
  
      const q = await query(
        posts,
        where("userId", "==", getUserId())
      );
      await getDocs(q)
      .then(res => {
        const newData = res.docs.map((item) => ({
          ...item.data(), id: item.id
        }))

        const finalPostTimeLine = [0, 0, 0, 0, 0, 0, 0]
        newData.map((post: any) => {
          const day = moment(new Date(post.createdAt.seconds * 1000)).format('ddd')
          const dayCode = moment(new Date(post.createdAt.seconds * 1000)).format('d')
          finalPostTimeLine[parseInt(dayCode)] = finalPostTimeLine[parseInt(dayCode)] + 1
        })
        setPosts(finalPostTimeLine)
      })
    }

    getLastWeekPosts()
  }, [])

  return (
    <Card>
      <h5 style={{marginBottom: 8}}>Your Last Posts</h5>
      {/* Charts */}
      <div>
        {posts.length === 0 && <p style={{textAlign: "center"}}>No data to display</p>}
      </div>

      <ReactApexChart options={options} series={series} type="bar" />

    </Card>
  );
};

export default CSSModules(PersonalHomeCard, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "ignore",
});
