"use client";
import styled from "styled-components";
import React, { useState } from "react";
import checkUrl from "@/app/lib/checkUrl";
import createShortenedUrl from "@/app/lib/createShortenedUrl";

const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 6px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  font-weight: bold;
`;

const ResultWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const ResultLink = styled.a`
  color: #007bff;
  text-decoration: underline;
  word-break: break-all;
`;


export default function UrlShortenerForm() {
    const [originalUrl, setOriginalUrl] = useState("");
    const [aliasUrl, setAliasUrl] = useState("");
    const [shortenedUrl, setShortenedUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setShortenedUrl(null);
        const isValid = await checkUrl(originalUrl);
        if (!isValid) {
            setError("The provided URL is not valid, please enter a valid URL");
            return;
        }
        try {
            const result = await createShortenedUrl(originalUrl, aliasUrl);
            setShortenedUrl(result.aliasUrl);
        } catch (err: any) {
            if (err.message === "Alias URL already exists") {
                setError("The provided alias URL already exists, please choose a different one");
            } else {
                setError("An error occurred while creating the shortened URL");
            }
        }
    };
    
    return(
        <Container>
            <Form onSubmit={handleSubmit}>
                <div>
                    <Label> Original Url </Label>
                    <Input
                        type="text"
                        value={originalUrl}
                        onChange={(e) => setOriginalUrl(e.target.value)}
                        placeholder="https://example.com/super/duper/very/long/url"
                        required
                    />
                </div>
                <div>
                    <Label> Custom Alias </Label>
                    <Input
                        type="text"
                        value={aliasUrl}
                        onChange={(e) => setAliasUrl(e.target.value)}
                        placeholder="your-custom-alias"
                        required
                    />
                </div>
                <Button type="submit">Shorten URL</Button>
            </Form>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            {shortenedUrl && (
                <ResultWrapper>
                    <p> Your shortened URL: </p>
                    <ResultLink href={`/${shortenedUrl}`} target="_blank" rel="noopener noreferrer">
                        {`/${shortenedUrl}`}
                    </ResultLink>
                </ResultWrapper>
            )}
        </Container>
    );
}