
public class Sieve {
    public static void main(String[] args) {
        int top = Integer.valueOf(args[0]);
        boolean[] noPrime = new boolean[top];
        
        for(int idx=2; idx<top; ++idx) {
            if(noPrime[idx]) {
                continue;
            }
            
            System.out.println(idx);
            
            for(int i = 2*idx; i<top; i+=idx) {
                noPrime[i] = true;
            }
        }
    }
}


