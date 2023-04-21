import { configureStore } from "@reduxjs/toolkit";
import mailreducer from "../features/mailslice";

export const store = configureStore({
  reducer: {
    mail: mailreducer,
  },
});
