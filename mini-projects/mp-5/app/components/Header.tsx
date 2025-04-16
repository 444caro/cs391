"use client";
import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #007bff;
  color: white;
  padding: 16px;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const Subtitle = styled.p`
  margin: 8px 0 0;
  font-size: 14px;
`;

export default function Header() {
    return(
        <HeaderWrapper>
            <Title>URL Shortener</Title>
            <Subtitle>Shorten your long URLs into compact, shareable links</Subtitle>
        </HeaderWrapper>
    );
}