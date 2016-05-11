#!/usr/bin/env perl

my $top  = $ARGV[0];

my @primes;
my $prime;

for ( 2 .. $top ) {
    next if $primes[$_];
    print "$_\n";
    $prime = $_;
    {
        local $_;
        $primes[ $_ * $prime ] = 1 for 2 .. $top / $prime;
    }
}
