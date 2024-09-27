
var deleteDuplicates = function(head) {
    if(head === null) return head

    let current = head

    while(current.next){
        let check = current.next
        if(current.val === check.val){
            current.next = check.next
        }else{
            current = check
        }
    }
    return head
};

const head = [1,1,2]
console.log(deleteDuplicates(head));