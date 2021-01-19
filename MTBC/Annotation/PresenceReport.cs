using System.Collections;

namespace MTBC.Annotation
{
    public class PresenceReport
    {
        protected BitArray Genes;

        public PresenceReport(int size)
        {
            Genes = new BitArray(size);
        }

        public void SetPresence(int index, bool presence)
        {
            Genes.Set(index, presence);
        }
        
        public bool GetPresence(int index)
        {
            return Genes.Get(index);
        }
        
        public string ToSquareString()
        {
            string result = "";
            for (int i = 0; i < Genes.Count; i++) result += Genes.Get(i) ? "■" : "□";
            return result;
        }
    }
}