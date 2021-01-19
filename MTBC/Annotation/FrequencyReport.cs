using System;
using System.Collections.Generic;

namespace MTBC.Annotation
{
    public class FrequencyReport
    {
        protected readonly Dictionary<int, uint> Frequencies;
        public int Count => Frequencies.Count;
        public FrequencyReport(int size)
        {
            Frequencies = new Dictionary<int, uint>(size);
            for (int i = 0; i < size; i++) Frequencies[i] = 0;
        }
        
        public void Increment(int index)
        {
            if (index > Frequencies.Count) throw new IndexOutOfRangeException();
            Frequencies[index]++;
        }

        public uint GetFrequency(int index)
        {
            return Frequencies[index];
        }

        public PresenceReport ToPresenceReport(int minValue)
        {
            var result = new PresenceReport(Frequencies.Count);
            for (int i = 0; i < Frequencies.Count; i++)
            {
                result.SetPresence(i, Frequencies[i] > minValue);
            }
            return result;
        }
    }
}