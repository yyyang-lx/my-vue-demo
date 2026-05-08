const env =import.meta.env.MODE || "prod"
const EnvCofig = {
  development:{
    baseApi:'api',
    mockApi:'https://apifoxmock.com/ml/4068509-0-default/api',
  },
  test:{
    baseApi:'//test.future.com/api',
    mockApi:'https://apifoxmock.com/ml/4068509-0-default/api',
  },
  prod:{
    baseApi:'//future.com/api',
    mockApi:'https://apifoxmock.com/ml/4068509-0-default/api',
  },
};
export default{
  env,
  ...EnvCofig[env],
  mock:true,
};