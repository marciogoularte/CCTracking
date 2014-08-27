using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCTracking.Dto.Response
{
    public class NearestCentreResponse : BaseModelResponse
    {
        public NearestAlkhidmatCentre NearestCentreModel { get; set; }
        public List<NearestAlkhidmatCentre> NearestCentreList { get; set; }
    }
}
