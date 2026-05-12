# Cloud Resume Challenge – AWS Serverless Resume Website

A production-style serverless resume website built on AWS using Infrastructure as Code (Terraform), CI/CD automation, and modern cloud architecture principles.

This project demonstrates hands-on experience with:
- AWS cloud infrastructure
- Serverless backend development
- CI/CD pipelines
- Infrastructure as Code (IaC)
- CDN and HTTPS configuration
- Cloud security and IAM
- Frontend deployment automation

---

# Live Site

🌐 https://your-domain.com

---

# Architecture Overview

```text
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
```

![Architecture Diagram](https://raw.githubusercontent.com/jw-duncan/cloud-resume-challenge/main/assets/architecture.png)

---

# Features

- Static resume website hosted on Amazon S3
- Global content delivery using Amazon CloudFront
- HTTPS secured with AWS Certificate Manager (ACM)
- Custom domain routing using Route 53
- Visitor counter API powered by AWS Lambda + API Gateway
- DynamoDB integration for persistent visitor tracking
- Infrastructure provisioning using Terraform
- Automated CI/CD deployments with GitHub Actions
- Version-controlled infrastructure and application code

---

# Technologies Used

## Cloud Services
- AWS S3
- AWS CloudFront
- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB
- AWS Route 53
- AWS Certificate Manager (ACM)
- AWS IAM

## DevOps & Infrastructure
- Terraform
- GitHub Actions
- CI/CD Pipelines

## Languages & Frameworks
- HTML
- CSS
- JavaScript
- Python

---

# CI/CD Pipeline

This project uses GitHub Actions to automate deployments.

## Deployment Workflow

1. Code is pushed to GitHub
2. GitHub Actions workflow is triggered
3. Frontend files are synced to S3
4. CloudFront cache invalidation is performed
5. Updated site is deployed automatically

This removes the need for manual deployments and simulates real-world DevOps workflows.

---

# Infrastructure as Code

Infrastructure is provisioned and managed using Terraform.

Key infrastructure components managed with Terraform:
- S3 bucket configuration
- CloudFront distribution
- IAM policies
- API Gateway resources
- Lambda deployment
- DynamoDB table
- Route 53 DNS records

---

# Security Considerations

This project implements several AWS security best practices:
- HTTPS enforced through CloudFront and ACM
- IAM least-privilege permissions
- S3 public access restrictions
- CDN-based content delivery
- Serverless architecture minimizing exposed infrastructure

---

# Repository Structure

```text
cloud-resume-challenge/
│
├── frontend/              # Static website files
├── terraform/             # Infrastructure as Code
├── backend/               # Lambda function code
├── .github/workflows/     # GitHub Actions CI/CD
├── assets/                # Architecture diagrams/images
└── README.md
```

---

# Challenges & Lessons Learned

During development, I gained hands-on experience troubleshooting and resolving:
- CloudFront 504 errors
- S3 bucket policy and access configuration
- Terraform state and deployment issues
- GitHub Actions workflow debugging
- CDN caching and invalidation behavior
- AWS IAM permission management

This project strengthened my understanding of real-world cloud infrastructure deployment and operational troubleshooting.

---

# Future Improvements

Planned enhancements include:
- Docker containerization
- ECS/Fargate deployment
- Monitoring and alerting with CloudWatch
- Terraform modules and remote state management
- Automated testing within CI/CD pipeline
- WAF integration for additional security

---

# Author

John Duncan

- GitHub: [https://github.com/jw-duncan](https://github.com/jw-duncan)
- LinkedIn: [https://www.linkedin.com](https://www.linkedin.com/in/john-w-duncan-7701b7184/)
- Portfolio Website: https://your-domain.com

---

# References

This project was inspired by the Cloud Resume Challenge:

https://cloudresumechallenge.dev
