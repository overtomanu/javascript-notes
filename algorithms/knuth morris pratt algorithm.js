// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // knuth morris pratt algorithm

    // lps is the array containing longest proper prefix which is also the suffix
    // for pattern ending at pos i, proper prefix means it does not encompass the whole string

    // While matching the pattern (string needle here), if we have compared and matched till position i 
    // in pattern, and if the ith character of pattern doesn't match with text, then we don't have start
    // matching from the beginning of the pattern again. We have to start matching with character which is
    // just after the longest prefix. Since this longest prefix is also the suffix string which ends before
    // position i in the pattern, characters in this prefix are already compared and matched

    // lets say pattern is AABAAC, then lps is [0,1,0,1,2,0]
    // now if we are matching it against text AABAABAAC, then there will be match failure at last character
    // of pattern (position 5 of text in which we compare B of text with C of pattern), after this failure
    // since we know that the string before C "AA" is already matched and since it is also the prefix of the
    // pattern, for next match we can comparison from lps[4] which is 2 and it points to position after the 
    // prefix AA. So now we continue comparison of "B" from pattern to 2nd "B" with text and it leads to a
    // match.

    let lps = new Array(needle.length);
    computeLPS(needle,lps);
    //console.log("lps array:",lps);

    // i is the index for pattern and j is for the text
    let i=0,j=0;

    // while remaining characters in text is greater than or equal to remaining characters in pattern
    while((haystack.length-j)>=(needle.length-i)){
        //console.log("indexes:",j,i);
        //console.log("comparing:",haystack[j],needle[i]);
        if(haystack[j]===needle[i]){
            i++;j++;
            if(i===needle.length){
                // found a match
                return j-i;
            }
        }else{
            if(i!=0){
                i=lps[i-1];
            }else{
                //no match with current character, move to next
                j++;
            }
        }
    }
    // pattern not found in text
    return -1;
};

// function to compute LPS array
// computeLPS has complicate logic where it uses length of longest prefix-suffix computed at previous 
// positions to compute length of LPS at current position current character doesn't match with the
// currently running prefix suffix
function computeLPS(pattern,lps){
    // i points to the index for which LPS has to be computed, starts from 1 and ends with pat.length-1
    // len is the length of currently running longest prefix suffix. if there is a mismatch, then len is
    // reset to the length of prefix of the currently running prefix. 

    // for eg: if pattern is AABAACAABAABD, then LPS is [0,1,0,1,2,0,1,2,3,4,5,3,0]
    // while calculating LPS for last B in the pattern, the currently running prefix will be AABAA
    // Note that this is also the suffix of string before last B. now since the last "B" doesn't 
    // match with character "C" (present after currently running prefix AABAA of length 5), we have 
    // to reset running prefix (hence set the len variable) to longest prefix-suffix of the current
    // prefix AA is the longest prefix-suffix of AABAA and AA is already matched
    // This resetting is accomplished by doing len=lps[len-1]

    let i=1, len=0;
    lps[0]=0;
    while(i<pattern.length){
        //console.log("lps:",i,len);
        if(pattern[i]===pattern[len]){
            len++;
            lps[i]=len;
            i++;
        }else if(len!=0){
            // no match, so try with prefix-suffix of the current prefix
            len=lps[len-1];
        }else{
            // if len is 0 then, there is no prefix which is also suffix ending with this character
            // so set lps as zero and move to next character
            lps[i]=0;
            i++;
        }
    }
}