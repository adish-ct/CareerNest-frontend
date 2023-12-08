import { Card, CardBody, Typography } from "@material-tailwind/react";
import Navbar from "../../components/Header/Accounts/Navbar";
import React from "react";

function Profile() {
  return (
    <>
      <Navbar />
      <div className="w-full h-1/3 ps-2 pe-2 md:ps-5 md:pe-5 lg:ps-8 lg:pe-8  rounded-lg">
        <img
          className="rounded-xl w-full h-48 sm:h-60 md:h-60 xl:h-64 2xl:h-72  "
          src="https://raspberry-valley.azurewebsites.net/img/Python-01.jpg"
          alt="banner image"
        />
      </div>
      <div className="ps-8 pe-8 md:ps-16 md:pe-16 lg:ps-20 lg:pe-20 2xl:ps-80 2xl:pe-80">
        <div className="flex flex-col gap-8">
          <div className="flex gap-8 items-end mt-[-30px] lg:mt-[-50px]">
            <div className="rounded-xl shadow">
              <img
                className=" rounded-3xl h-36 w-36 md:h-40 md:w-40 xl:w-44 xl:h-44 2xl:h-48 2xl:w-48"
                src="https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg"
                alt="profile pic"
              />
            </div>
            <div className="flex flex-col">
              <h1>username</h1>
              <h1>username</h1>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1>about</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              sapiente obcaecati saepe, possimus quasi veritatis aut dicta natus
              nobis commodi magni hic nisi, laboriosam exercitationem delectus
              tempora. Vero, cumque alias.
            </p>
          </div>
        </div>
        <hr className="mt-10 mb-10" />
        <div className="flex flex-row gap-2 w-full bg-[#787777]">
          <div className="w-1/4">
            <Card className="shadow">
              <CardBody>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 text-center"
                >
                  Quick Link
                </Typography>
                <hr />
                <Typography>Profile</Typography>
              </CardBody>
            </Card>
          </div>
          <div className="w-3/4">
            <Card className="shadow">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography>
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk and near to &quot;Naviglio&quot; where you can
                  enjoy the main night life in Barcelona.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
