import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import _ from "lodash";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { HomeStyles } from "./Home.Style";
import moment from "moment";

const Home = () => {
  const [animeData, setAnimeData] = useState([]);
  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    axios
      .get(`https://api.jikan.moe/v4/top/anime?limit=${20}`)
      .then((res) => {
        setAnimeData(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const CustomizedTooltip = ({ active, payload, label }: any) => {
    if (active) {
      return (
        <>
          {Array.isArray(payload) && (
            <Box
              className="tooltip"
              sx={{
                border: "2px solid #d64646",
                borderRadius: "8px",
                backgroundColor: "#fff",
                fontSize: "16px",
                padding: "15px",
              }}
            >
              <p>{payload[0]?.payload?.name}</p>
              <Box>
                {_.map(payload[0]?.payload?.rowArray, (row) => {
                  return <p>{row}</p>;
                })}
              </Box>
            </Box>
          )}
        </>
      );
    }
    return null;
  };
  const YearData = _.compact(
    _.map(_.entries(_.groupBy(animeData, "year")), ([key, value], index) => {
      return (
        key !== "null" && {
          name: String(key),
          pv: value?.length,
          rowArray: _.map(value, (row: { title: string }) => row?.title),
        }
      );
    })
  );

  return (
    <HomeStyles>
      <Box className="cointainer">
        <Box className="row">
          {animeData?.map((val, index): any => {
            return (
              <Box className="image_box" key={index}>
                <Box className="innerBox">
                  <Box className="img_rank">
                    <h6>{val?.["rank"]}</h6>
                    <img
                      src={val?.["images"]?.["jpg"]?.["image_url"]}
                      alt="image"
                    />
                  </Box>
                  <Box className="container-content">
                    <h3>{val?.["title"]}</h3>
                    <Box className="bottom_div">
                      <p>
                        <b>Release: </b>
                        {moment(val?.["aired"]?.["from"]).format(
                          "ddd MMM DD YYYY"
                        )}
                      </p>
                      <p>
                        <b>Latest:</b> {"now"}
                      </p>
                      <p>
                        <b> Rating:</b> {val?.["rating"]}
                      </p>
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box
          className="graph_div"
          sx={{
            maxWidth: "100%",
            width: "100%",
            margin: "40px auto 0",
          }}
        >
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart
              width={800}
              height={350}
              data={_.filter(YearData, (row) => Boolean)}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorPv" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="79%" stopColor="#80f1a8" stopOpacity={0.8} />
                  <stop offset="15%" stopColor="#b5afdf" stopOpacity={0} />
                </linearGradient>

                <linearGradient
                  xmlns="http://www.w3.org/2000/svg"
                  id="gradient-fill"
                  x1="0"
                  y1="0"
                  x2="800"
                  y2="0"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#80f1a8" />

                  <stop offset="0.2" stop-color="#5ceebf" />

                  <stop offset="1" stop-color="#b5afdf" />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis tickSize={1} allowDecimals={false} />
              <CartesianGrid vertical={false} />

              <Tooltip content={<CustomizedTooltip />} />
              <Area
                type="monotone"
                dataKey="pv"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#gradient-fill)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </HomeStyles>
  );
};

export default Home;
