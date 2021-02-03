const config = {
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-uploads-akb",
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://rlp3cvboz5.execute-api.ap-southeast-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_23nty9tw8",
    APP_CLIENT_ID: "5ntes86lf84v5utle7l325rjtc",
    IDENTITY_POOL_ID: "ap-southeast-2:30b5848d-59b3-40e9-a09e-249700931341",
  },
};
export default config;
