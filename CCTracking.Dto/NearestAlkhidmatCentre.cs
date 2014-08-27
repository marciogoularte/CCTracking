using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CCTracking.Dto
{
    public class NearestAlkhidmatCentre :  BaseModel
    {
        public int CentreId { get; set; }
        public int NearestCentreId { get; set; }
        public byte NearestLevel { get; set; }
    }
}
