import { AiOutlineQuestion, AiTwotoneLock } from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";
import { BiUser } from "react-icons/bi";
import { AiOutlineTags } from "react-icons/ai";
import { BsInbox } from "react-icons/bs";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { LiaStackExchange } from "react-icons/lia";
import { SlBadge } from "react-icons/sl";

export const menu = [
  { icon: <AiOutlineQuestion />, title: "QUESTIONS" },
  { icon: <AiTwotoneLock />, title: "JOBS" },
  { icon: <GrDocumentText />, title: "DOCUMENTATION" },
  { icon: <AiOutlineTags />, title: "TAGS" },
  { icon: <BiUser />, title: "USERS" },
  { icon: <SlBadge />, title: "BADGES" },
  { icon: <HiOutlineSpeakerphone />, title: "ASK QUESTION" },
  { icon: <LiaStackExchange />, title: "STACK EXCHANGE" },
  { icon: <BsInbox />, title: "INBOX" }
];