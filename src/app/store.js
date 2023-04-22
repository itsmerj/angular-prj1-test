import { configureStore } from "@reduxjs/toolkit";
import mailreducer from "../mailslice";

export const store = configureStore({
  reducer: {
    mail: mailreducer,
  },
});
