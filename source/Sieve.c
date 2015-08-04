#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char** argv) {
    int top = atoi(argv[1]);
    bool noPrime[top];
    memset(noPrime, 0, sizeof(noPrime));
#pragma omp parallel
    for(int idx=2; idx<top; ++idx) {
        if(noPrime[idx]) {
            continue;
        }
            
        printf("%d\n", idx);

#pragma omp for
        for(int i = 2*idx; i<top; i+=idx) {
            noPrime[i] = true;
        }
    }
    return 0;
}
