// https://leetcode-cn.com/problems/intersection-of-two-linked-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
  if(headA === null || headB === null) {
      return null
  }
  let pa = headA
  let pb = headB 

  // pa和pb相遇 就是要找的节点
  while(pa !== pb) {


      pa = pa === null ? headB : pa.next
      pb = pb === null ? headA : pb.next

  }

  return pa
};