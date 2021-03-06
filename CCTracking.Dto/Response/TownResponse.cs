﻿using System.Collections.Generic;

namespace CCTracking.Dto.Response
{
    public class TownResponse : BaseModelResponse
    {
        public Town TownModel { get; set; }
        public List<Town> TownList { get; set; }
    }

    public class TownGridResponse : BaseModelResponse
    {
        public List<TownGrid> TownList { get; set; }
    }
}
