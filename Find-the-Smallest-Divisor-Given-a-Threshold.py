class Solution:
    def smallestDivisor(self, arr: list[int], k: int) -> int:
        # Code here
        if(len(arr)>k):
            return -1
        
        l,h=1,max(arr)
        while(h>=l):
            mid=(l+h)//2
            if self.sumBy(arr,mid)<=k:
                h=mid-1
            else:
                l=mid+1
        return l
        
    def sumBy(self,arr,mid):
        return sum(math.ceil(x/mid) for x in arr)
        
