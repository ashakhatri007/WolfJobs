// import CreateIcon from '@mui/';
import { BiSolidPencil } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useUserStore } from "../../store/UserStore";
import { useState } from "react";
import ProfileEdit from "./ProfileEdit";

const Profile = () => {
  const name = useUserStore((state) => state.name);
  const email = useUserStore((state) => state.email);
  const address = useUserStore((state) => state.address);
  const role = useUserStore((state) => state.role);
  const skills = useUserStore((state) => state.skills);
  const phonenumber = useUserStore((state) => state.phonenumber);
  const affiliation = useUserStore((state) => state.affiliation);
  const availability = useUserStore((state) => state.availability);
  const gender = useUserStore((state) => state.gender);
  const hours = useUserStore((state) => state.hours);

  const widthCard = "700px";

  const [editMode, setEditMode] = useState(false);

  return (
    <>
      <div
        className="flex flex-col items-center justify-center bg-gray-50  "
        style={{ height: "calc(100vh - 72px)" }}
      >
        <div
          className="bg-white flex flex-col rounded-xl m-6 mx-10 p-4 pb-20 py-4 overflow-y-scroll"
          style={{ width: `${widthCard}` }}
        >
          <div
            className="relative h-0"
            style={{ left: `calc(${widthCard} - 60px)`, top: "9px" }}
          >
            {editMode ? (
              <AiOutlineClose
                onClick={(e: any) => {
                  e.preventDefault();
                  setEditMode(false);
                }}
              />
            ) : (
              <BiSolidPencil
                onClick={(e: any) => {
                  e.preventDefault();
                  setEditMode(true);
                }}
              />
            )}
          </div>
          <div className="text-xl border-b my-2">Profile</div>
          {!editMode && (
            <>
              <div>
                <span className="text-lg">Name: </span>
                <span className="text-gray-500">{name || " -- "}</span>
              </div>
              <div>
                <span className="text-lg">Email: </span>
                <span className="text-gray-500">{email || " -- "}</span>
              </div>
              <div>
                <span className="text-lg">Role: </span>
                <span className="text-gray-500">{role || " -- "}</span>
              </div>
              <div>
                <span className="text-lg">Address: </span>
                <span className="text-gray-500">{address || " -- "}</span>
              </div>
              <div>
                <span className="text-lg">Skills: </span>
                <span className="text-gray-500">{skills || " -- "}</span>
              </div>
              <div>
                <span className="text-lg">Phone Number: </span>
                <span className="text-gray-500">{phonenumber || " -- "}</span>
              </div>
              {!!affiliation && (
                <div>
                  <span className="text-lg">Affiliation: </span>
                  <span className="text-gray-500">
                    {affiliation || " -- "}{" "}
                  </span>
                </div>
              )}
              <div>
                <span className="text-lg">Availability: </span>
                <span className="text-gray-500">{availability || " -- "}</span>
              </div>
              <div>
                <span className="text-lg">Gender: </span>
                <span className="text-gray-500">{gender || " -- "}</span>
              </div>
              {/* <div>
                <span className="text-lg">Hours: </span>
                <span className="text-gray-500">{hours || " -- "}</span>
              </div> */}
            </>
          )}
          {editMode && (
            <ProfileEdit
              props={{
                name,
                email,
                address,
                role,
                skills,
                phonenumber,
                affiliation,
                availability,
                gender,
                hours,
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
