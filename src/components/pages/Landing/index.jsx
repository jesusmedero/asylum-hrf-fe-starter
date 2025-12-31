

import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import { decodeBase64 } from '../../../utils/decodeBase64.js';

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */

export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  
  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  
  const handleReadMore = () => {
    // TODO: navigate to the humanrightsfirst.org homepage
    window.location.href = 'https://www.humanrightsfirst.org/';
  };

  
  const handleViewData = () => {
    //navigate('/graphs');
    navigate("/graphs");
  };

  return (
    <div className="w-full">

      {/*SECTION 1: HERO HEADER*/}
      <section className="primary-c pt-4 pb-8 text-center">
        <h1 className="text-6xl mb-8 text-white">
          Asylum Office Grant Rate Tracker
        </h1>

        <p className="text-white max-w-4xl mx-auto">
          The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public an interactive tool to explore USCIS data on Asylum Office decisions.
        </p>
      </section>

      {/*SECTION 2: GRAPH CARDS*/}
      <section className="flex justify-center gap-10 py-12">

        <div className="text-center">
          <img src={barGraph} alt="bar graph" className="w-90 h-60 object-contain mx-auto" />
          <p>Search Grant Rates By Office</p>
        </div>

        <div className="text-center">
          <img src={pieChart} alt="pie chart" className="w-90 h-60 object-contain mx-auto" />
          <p>Search Grant Rates By Nationality</p>
        </div>

        <div className="text-center">
          <img src={lineGraph} alt="line graph" className="w-90 h-60 object-contain mx-auto" />
          <p>Search Grant Rates Over Time</p>
        </div>
      </section>

      {/*SECTION 3: ACTION BUTTONS*/}
      <section className="flex justify-center gap-6 py-6">
        <button onClick={handleViewData} className="px-6 py-2 border">
          View the Data
        </button>

        <button onClick={downloadCSV} className="px-6 py-2 border">
          Download the Data
        </button>
      </section>

      {/*SECTION 4: IMAGE + DESCRIPTION*/}
      <section className="flex justify-center items-center gap-12 py-16">
        <img src={paperStack} className="w-96" alt="paper stack" />

        <p className="max-w-md text-xl">
          Human Rights First has created a search tool to give you a user-friendly way to explore a data set of asylum decisions between FY 2016 and May 2021 by the USCIS Asylum Office, which we received through a Freedom of Information Act request. You can search for information on asylum grant rates by year, nationality, and asylum office, visualize the data with charts and heat maps, and download the data set.
        </p>
      </section>

      {/*SECTION 5: INSIGHT*/}
      <section className="text-center py-12">
        <h2 className="text-3xl font-semibold mb-10">
          Systemic Disparity Insights
        </h2>

        <div className="flex justify-center gap-16">

          <div className="flex flex-col gap-6 max-w-xs">
            <h3 className="text-4xl">36%</h3>
            <p className="text-lg">
              By the end of the Trump administration, the average asylum office grant rate had fallen 36% from an average of 44 percent in fiscal year 2016 to 28 percent in fiscal year 2020.
            </p>
          </div>

          <div className="flex flex-col gap-6 max-w-xs">
            <h3 className="text-4xl">5%</h3>
            <p className="text-lg">
              The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.
            </p>
          </div>

          <div className="flex flex-col gap-6 max-w-xs">
            <h3 className="text-4xl">6x Lower</h3>
            <p className="text-lg">
              Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was 6 times lower than the San Francisco asylum office.
            </p>
          </div>

        </div>
      </section>  

      {/*SECTION 6: READ MORE / BACK TO TOP */}
      <section className="text-center py-10">
        <button onClick={handleReadMore} className="px-6 py-2 border">
          Read More
        </button>

        <div className="mt-6">
          <button onClick={scrollToTop} className="underline">
            Back To Top ↑
          </button>
        </div>
      </section>

      <div>{'Type this into Canvas: ' + decodeBase64('VGltZTJDb2RlIQ==')}</div>

    </div>
  );
};
