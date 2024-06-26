import React from 'react';
import { Toaster } from 'react-hot-toast';
import FooterShortCore from "../../components/FooterShortCore";
import DashboardCard from '../../components/card/dashboardCard';
import ServiceCard from '../../components/card/serviceCard';

export default function Dashboard() {
    return (
        <div>
            <Toaster position="top-center" reverseOrder={false}></Toaster>

            <DashboardCard welcomeText={"Welcome"} />

            <div className="font-thin text-3xl pt-10 mx-5">Services</div>
            <div className='grid grid-cols-1 lg:grid-cols-2 px-5 gap-5 pt-5'>
            <ServiceCard to={"/nin-service"} title={"NIN Service"} body={"Perform NIN verification with NIN, Phone, Demography etc"} />
            <ServiceCard to={'/bvn-service'} title={"NIN BVN"}  body={"Perform BVN verification with BVN, Phone etc"} />
            <ServiceCard to={'#'} soon={true}  title={"NIN Others"}  body={"Explore others of our services"} />

            </div>

            <FooterShortCore />
        </div>
    );
}
