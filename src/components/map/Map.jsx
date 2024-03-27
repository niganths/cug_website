import React from "react";
import "./Map.css";
import image from "../../assets/images/aws.png";
function Map() {
  return (
    <div className="timeline">
      <div className="container left-container">
        <img src={image} alt="" />
        <div className="text-box">
          <h1>Introduction</h1>
          <ol type="1">
            <li>What is cloud computing?</li>
            <li>Iaas vs Paas vs Saas</li>
            <li>Public vs priovate vs Hybrid Cloud</li>
            <li>Introduction AWS</li>
            <li>AWS Global Infrastructure</li>
            <li>Shared Responsibility Model</li>
            <li>Well Architected Framework</li>
          </ol>
          <span className="left-container-arrow"></span>{" "}
        </div>
      </div>
      <div className="container rigth-container">
        <img src={image} alt="" />
        <div className="text-box">
          <h1>EC2</h1>
          <ol>
            <li>Instance Types</li>
            <li>CPU credits</li>
            <li>Storage / Volumes</li>
            <li>Key Pairs</li>
            <li>Elastic IP</li>
            <li>User Data Scripts</li>
            <li>Purchasing Options</li>
          </ol>
          <span className="right-container-arrow"></span>{" "}
        </div>
      </div>
      <div className="container left-container">
        <img src={image} alt="" />
        <div className="text-box">
          <h1>VPC</h1>
          <ol>
            <li>CIDR blocks</li>
            <li>Subnets</li>
            <li>Route Tables</li>
            <li>Security Groups</li>
            <li>Internet gateway</li>
            <li>NAT gateway</li>
          </ol>
          <span className="left-container-arrow"></span>{" "}
        </div>
      </div>
      <div className="container rigth-container">
        <img src={image} alt="" />
        <div className="text-box">
          <h1>IAM</h1>
          <ol>
            <li>Policies</li>
            <li>Users / User Groups</li>
            <li>Roles</li>
          </ol>
          <span className="right-container-arrow"></span>{" "}
        </div>
      </div>
      <div className="container left-container">
        <img src={image} alt="" />
        <div className="text-box">
          <h1>Auto Scaling</h1>
          <ol>
            <li>AMIs</li>
            <li>Launch Templates</li>
            <li>Auto-Scaling Groups</li>
            <li>Scaling Policies</li>
            <li>Elastic Load Balancer</li>
          </ol>
          <span className="left-container-arrow"></span>
        </div>
      </div>
      <div className="container rigth-container">
        <img src={image} alt="" />
        <div className="text-box">
          <h1>S3</h1>
          <ol>
            <li>Buckets / Objects</li>
            <li>Bucket / Objects Lifestyle</li>
            <li>Storage Objects</li>
            <li>Standard</li>
            <li>S3-IA / Glacier</li>
          </ol>
          <span className="right-container-arrow"></span>
        </div>
      </div>
      <div className="container left-container">
        <img src={image} alt="" />
        <div className="text-box">
          <h1>SES</h1>
          <ol>
            <li>Sandbox / Sending Limits</li>
            <li>Identity Verification</li>
            <li>DKIM setup</li>
            <li>Configuration Sets</li>
            <li>Sender Reputation</li>
            <li>Dedicated IP</li>
          </ol>
          <span className="left-container-arrow"></span>
        </div>
      </div>
      <div className="container rigth-container">
        <img src={image} alt="" />
        <div className="text-box">
          <h1>Route53</h1>
          <ol>
            <li>Hosted Zones</li>
            <li>Routing Policies</li>
            <li>Healthecks</li>
          </ol>
          <span className="right-container-arrow"></span>
        </div>
      </div>
      <div className="container left-container">
        <img src={image} alt="" />
        <div className="text-box">
          <h1>Cloudwatch</h1>
          <ol>
            <li>Sandbox / Sending Limits</li>
            <li>Identity Verification</li>
            <li>DKIM setup</li>
            <li>Metrics</li>
            <li>Events</li>
            <li>Logs</li>
          </ol>
          <span className="left-container-arrow"></span>
        </div>
      </div>
      <div className="container rigth-container">
        <img src={image} alt="" />
        <div className="text-box">
          <h1>Cloudfront</h1>
          <ol>
            <li>Distributions</li>
            <li>Policies</li>
            <li>Invalidations</li>
          </ol>
          <span className="right-container-arrow"></span>
        </div>
      </div>
      <div className="container left-container">
        <img src={image} alt="" />
        <div className="text-box">
          <h1>RDS</h1>
          <ol>
            <li>DB Instances</li>
            <li>Storage Types</li>
            <li>Backup / Restore</li>
          </ol>
          <span className="left-container-arrow"></span>
        </div>
      </div>
      <div className="container rigth-container">
        <img src={image} alt="" />
        <div className="text-box">
          <h1>DynamoDB</h1>
          <ol>
            <li>Tables / Items / Attributes</li>
            <li>Primary Keys / Secondary Indexes</li>
            <li>Data Modeling / Streams</li>
            <li>Capacity Settings</li>
            <li>Backup / Restore</li>
            <li>DynamoDB Local</li>
          </ol>
          <span className="right-container-arrow"></span>
        </div>
      </div>
      <div className="container left-container">
        <img src={image} alt="" />
        <div className="text-box">
          <h1>ElastiCache</h1>
          <ol>
            <li>Quotas</li>
          </ol>
          <span className="left-container-arrow"></span>
        </div>
      </div>
      <div className="container rigth-container">
        <img src={image} alt="" />
        <div className="text-box">
          <h1>ECS</h1>
          <ol>
            <li>Clusters / ECS Container Agents</li>
            <li>Tasks & Services</li>
            <li>Launch Config / Autoscaling Groups</li>
            <li>Fargate</li>
          </ol>
          <span className="right-container-arrow"></span>
        </div>
      </div>
      <div className="container left-container">
        <img src={image} alt="" />
        <div className="text-box">
          <h1>Lambda</h1>
          <ol>
            <li>Creating / Invoking Functions</li>
            <li>Layers & Custom Runtimes</li>
            <li>Versioning / Aliases</li>
            <li>Event Bridge / Scheduled Execution</li>
            <li>Cold Start and Limitations</li>
            <li>API Gateway & Lambda@Edge</li>
          </ol>
          <span className="left-container-arrow"></span>
        </div>
      </div>
    </div>
  );
}
export default Map;
