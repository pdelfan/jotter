import React from "react";
import Layout from "../components/Layout";
import { Heading, SubHeading } from "../components/Headings";

export default function toRead() {
  return (
    <Layout>
      <div>
        <Heading>To-read</Heading>
        <SubHeading>The books you want to read later</SubHeading>
      </div>
    </Layout>
  );
}
