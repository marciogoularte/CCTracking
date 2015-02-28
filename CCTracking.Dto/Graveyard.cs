namespace CCTracking.Dto
{
    public class Graveyard :  BaseModel
    {

        public int LandmarkId { get; set; }
        public string LandmarkDesc { get; set; }
        public string Name { get; set; }
    }

    public class GraveyardGrid : BaseModelGrid
    {
        public int Id { get; set; }
        public string LandmarkDesc { get; set; }
        public string Name { get; set; }
    }
}
