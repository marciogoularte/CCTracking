using CCTracking.Api.Helpers;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Security.Principal;
using System.Text;
using System.Web;
using System.Web.Http;

namespace CCTracking.Api.App_Start
{
    public class BasicHttpAuthorizeAttribute : System.Web.Http.AuthorizeAttribute
    {
        bool requireSsl = Convert.ToBoolean(ConfigurationManager.AppSettings["RequireSsl"]);

        public bool RequireSsl
        {
            get { return requireSsl; }
            set { requireSsl = value; }
        }


        bool requireAuthentication = true;

        public bool RequireAuthentication
        {
            get { return requireAuthentication; }
            set { requireAuthentication = value; }
        }


        public override void OnAuthorization(System.Web.Http.Controllers.HttpActionContext actionContext)
        {
            //actionContext.Request

            if (Authenticate(actionContext) || !RequireAuthentication)
            {
                return;
            }
            else
            {
                HandleUnauthorizedRequest(actionContext);
            }
        }

        protected override void HandleUnauthorizedRequest(System.Web.Http.Controllers.HttpActionContext actionContext)
        {
            var challengeMessage = new System.Net.Http.HttpResponseMessage(System.Net.HttpStatusCode.Unauthorized);
            challengeMessage.Headers.Add("WWW-Authenticate", "custom");
            throw new HttpResponseException(challengeMessage);
            //throw new HttpResponseException();
        }


        private bool Authenticate(System.Web.Http.Controllers.HttpActionContext actionContext) //HttpRequestMessage input)
        {
            bool result = false;

            IEnumerable<string> headerList = null;
            if (actionContext.Request.Headers.TryGetValues("AuthenticationToken", out headerList))
            {
                string authenticationToken = headerList.FirstOrDefault();
                Guid authenticationGuid = Guid.Empty;
                string token = string.Empty;
                try
                {
                    token = Security.Decrypt(authenticationToken);
                }
                catch
                {
                    throw new HttpResponseException(new HttpResponseMessage(System.Net.HttpStatusCode.Unauthorized)
                        {
                            Content = new StringContent("Invalid Authentication Token")
                        });
                }

                if (Guid.TryParse(token , out authenticationGuid))
                {
                    result = true;
                }
                else
                {
                    throw new HttpResponseException(new HttpResponseMessage(System.Net.HttpStatusCode.Unauthorized)
                    {
                        Content = new StringContent("Invalid Authentication Token")
                    });
                }
            }
            else
            {
                throw new HttpResponseException(new HttpResponseMessage(System.Net.HttpStatusCode.Unauthorized)
                {
                    Content = new StringContent("Invalid Authentication Token")
                });
            }
            return result;
        }

    }
}