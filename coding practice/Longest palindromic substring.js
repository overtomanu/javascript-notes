/*
5. Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.
*/

/* solution time limit exceeded in leetcode */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n=s.length,
        memo=new Map(),
        result=s.charAt(0),
        callCount=0,
        callCountWithMemo=0;
    
    function checkPalindrome(i,j){
        callCountWithMemo++;
        let key=i+"|"+j;
        if(memo.has(key)){
            if(memo.get(key)){
                return true;
            }else{
                return false;
            }
        }
        callCount++;
        if(i>=j){
            memo.set(key,true);
            return true;
        }
        
        //console.log("checking if indexes form palindrome:",i,j,s.substring(i,j+1));
        
        let endCharsMatch=false;
        if(s.charAt(i)===s.charAt(j)){
            endCharsMatch=true;
        }
        
        let curPalindrome;
        if(endCharsMatch && checkPalindrome(i+1,j-1)){
            memo.set(key,true);
            curPalindrome=s.substring(i,j+1);
            if(result.length<curPalindrome.length){
                result=curPalindrome;
            }
            return true;
        }else{
            if(!checkPalindrome(i,j-1)){
                checkPalindrome(i+1,j);
            }
            memo.set(key,false);
            return false;
        }
    }
    
    checkPalindrome(0,n-1);
    //console.log("memo.length:",memo.size);
    console.log("callCount,callCountWithMemo:",callCount,callCountWithMemo)
    return result;
};

console.log("longest palindromic substring:",longestPalindrome("qkajbumzdzkiplmbcpnhbzweoevrvbptpozhtrfntszvnwbdahvkykmezrwruhvvslngruvwqebudtfxgpbmwefczwrecpqjegxkqknpobzkemmtruidulnxgntjxcmxtwmlxhzmbqfqylwvzjyojhfawwuupiipvxjiyxkqvsxbhgzzegfkdihizvjoxzrmeorikzsdyphbujaqmykrfblneqmwwxsoonzsgvligqxrrumspylfvquklbanjhkudlprwoycpxdsueokruoofyubirbhbyfuvgllijywuqmkcsfjttbnmelrylivkefllepgxnoeummujbaoyvryukyoumvuxezegpwgmwsupjuaarvbtbfmisrifjadqjypmzipvjysgakvjhfeaqwpsqijvqibshctuabwqqsjwotjopahoaptmxkwerkjkmwiodgblhtnhykzjuaoluoyokroxuvqtkpggfanzabgjejdfsgybhxbscubdpufywbxgutheskuhixasnksoayjngvhfoxxclykfobrwxjwgefarzczvptlfrgrtrjcemaeihpukhbeoezgvrwxgyhpkkfvmfvquwtswkdwqqgrgasopladdnteulqofmjhewpghkibbrewnhdllfppctgkfkoedoiwqocnpvfviochrokrgrzthrvyhqfsrzyyvqwkhuzsrkfaympcdodkwaojnghzytkhf"));