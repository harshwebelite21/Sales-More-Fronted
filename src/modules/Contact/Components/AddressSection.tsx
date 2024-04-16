import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const AddressSection = () => {
  return (
    <div className=" flex flex-col gap-5 ">
      <div className="flex  gap-5">
        <div className="bg-blue-400 rounded-full p-3 h-fit">
          <LocationOnIcon fontSize="medium" />
        </div>
        <div>
          <div className="text-xl font-libre">Location</div>
          <div className="text-sm font-muli">
            43 Raymouth Rd. Baltemoer, London 3910
          </div>
        </div>
      </div>
      <div className="flex  gap-5">
        <div className="bg-blue-400 rounded-full p-3 h-fit">
          <AccessTimeIcon fontSize="medium" />
        </div>
        <div>
          <div className="text-xl font-libre">Open Hours:</div>
          <div className="text-sm font-muli">
            Sunday-Friday:<br></br>11:00 AM - 2300 PM
          </div>
        </div>
      </div>
      <div className="flex  gap-5">
        <div className="bg-blue-400 rounded-full p-3 h-fit">
          <EmailIcon fontSize="medium" />
        </div>
        <div>
          <div className="text-xl font-libre">Email:</div>
          <div className="text-sm font-muli">salesmore@gmail.com</div>
        </div>
      </div>
      <div className="flex  gap-5">
        <div className="bg-blue-400 rounded-full p-3 h-fit">
          <CallIcon fontSize="medium" />
        </div>
        <div>
          <div className="text-xl font-libre">Call:</div>
          <div className="text-sm font-muli">+1 1234 55488 55</div>
        </div>
      </div>
    </div>
  );
};

export default AddressSection;
