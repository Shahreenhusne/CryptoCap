
import { useState } from 'react';
//MUI 
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import { Link} from "react-router-dom";


export default function AnchorTemporaryDrawer() {
   const [open, setOpen] =useState<boolean>(false)

  return (
    <div>
       
          <IconButton onClick={() => setOpen(true)}>
            <MenuRoundedIcon className=" text-secondary"/>
          </IconButton>
          <Drawer
            anchor={"right"}
            onClose={() => setOpen(false)}
            open={open} 
        >
          <div className=' flex flex-col space-y-4 w-[40vw] h-full text-white bg-secondary'> 
               <Link
                 to="/"
                className="px-6 py-6 rounded-2xl text-white text-lg hover-custom-border-shadow"
                >
                 Home
                 </Link>
                <Link
                    to="/crypto"
                    className="px-6 py-6 rounded-2xl text-white text-lg hover-custom-border-shadow"
                >
                    Crypto
                </Link>
                <Link
                    to="/trending"
                    className="px-6 py-6 rounded-2xl text-white text-lg hover-custom-border-shadow"
                >
                    Trending
                </Link>
                <Link
                    to="/save"
                    className="px-6 py-6 rounded-2xl text-white text-lg hover-custom-border-shadow"
                >
                    Save
                </Link>
            
           </div>
     
          </Drawer>   
 
    </div>
  );
}
