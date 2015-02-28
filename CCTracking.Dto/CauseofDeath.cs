namespace CCTracking.Dto
{
    public class CauseofDeath :BaseModel
    {
        public string Name { get; set; }
    }

    public class CauseofDeathGrid : BaseModelGrid
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
