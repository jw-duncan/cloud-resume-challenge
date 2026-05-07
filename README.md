# cloud-resume-challenge
Repo for Cloud Resume Challenge. Implementing CI/CD pipeline

# Cloud Resume Challenge

A production-style serverless resume website built on AWS.  
This project demonstrates modern cloud engineering concepts including static site hosting, CDN delivery, serverless APIs, NoSQL databases, and CI/CD automation.

## Live Site

[https://your-domain-or-cloudfront-url.com](https://your-domain-or-cloudfront-url.com)

---

# Architecture

```
User Browser
      ↓
CloudFront CDN
      ↓
S3 Static Website Hosting
      ↓
API Gateway
      ↓
AWS Lambda (Python)
      ↓
DynamoDB

## Architecture

![Architecture](https://raw.githubusercontent.com/jw-duncan/cloud-resume-challenge/main/assets/architecture.png)
