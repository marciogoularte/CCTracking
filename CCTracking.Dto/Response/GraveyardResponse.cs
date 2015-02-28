﻿using System.Collections.Generic;

namespace CCTracking.Dto.Response
{
    public class GraveyardResponse : BaseModelResponse
    {
        public Graveyard GraveyardModel { get; set; }
        public List<Graveyard> GraveyardList { get; set; }
    }

    public class GraveyardGridResponse : BaseModelResponse
    {
        public List<GraveyardGrid> GraveyardList { get; set; }
    }
}
