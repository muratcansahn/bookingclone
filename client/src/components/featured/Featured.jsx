import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );

  console.log(data);
  const featuredHotels = [
    {
      city: "Berlin",
      image:
        "https://cdn2.setur.com.tr/image/tour/large/shutterstock-149620307_220894.jpg",
    },
    {
      city: "Madrid",
      image:
        "https://assets.enuygun.com/media/lib/570x400/uploads/image/4038.jpeg",
    },
    {
      city: "London",
      image:
        "https://www.kaplaninternational.com/files/styles/hero_banner_k_mb/public/school/featured/kaplan-english-school-in-London-4.jpg?itok=WTnubTro",
    },
  ];

  return (
    <div className="featured">
      {featuredHotels.map((hotel, i) => (
        <div className="featuredItem">
          <img src={hotel.image} alt="" className="featuredImg" />
          <div className="featuredTitles">
            <h1>{hotel.city}</h1>
            <h2>{data[i]} properties</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
