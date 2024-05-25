import React, { useEffect, useState } from "react";
import GayakCard from "../components/GayakCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Gayak.css";
import fetchData from "../helper/apiCall";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/reducers/rootSlice";
import Empty from "../components/Empty";

const Gayak = () => {
  const [Gayak, setGayak] = useState([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);

  const fetchAllDocs = async () => {
    dispatch(setLoading(true));
    const data = await fetchData(`/Gayak/getallGayak`);
    setGayak(data);
    dispatch(setLoading(false));
  };

  useEffect(() => {
    fetchAllDocs();
  }, []);

  return (
    <>
      <Navbar />
      {loading && <Loading />}
      {!loading && (
        <section className="container Gayak">
          <h2 className="page-heading">All Registered Gayak</h2>
          {Gayak.length > 0 ? (
            <div className="Gayak-card-container">
              {Gayak.map((ele) => {
                return (
                  <GayakCard
                    ele={ele}
                    key={ele._id}
                  />
                );
              })}
            </div>
          ) : (
            <Empty />
          )}
        </section>
      )}
      <Footer />
    </>
  );
};

export default Gayak;