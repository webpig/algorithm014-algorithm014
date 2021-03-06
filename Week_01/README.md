### 学习笔记

一周的课程内容还是比较多的，对于算法初学者来说，刷题很费时间，有时候一道题想通都要一个晚上；而且还需要复习。

既然基础较弱，那就要多花时间，这是不用多说的。自从进入训练营，我几乎每天都在学数据结构和算法，因为不多花时间真的拿不下来，平常有其他事耽搁了，但是会尽力把课程提到的相关题目都至少过一遍。

这周学习了数组，链表，栈，队列，跳表等数据结构，每个数据结构都有其优缺点，不存在一种十全十美的数据结构，如果存在的话，那就不需要这么多种数据结构了。

数组，平常用的最多的一种数据结构，用于遍历，随机访问很方便，但是它需要开辟连续的内存空间，对于内存要求比较高，而且插入删除操作需要移动相关元素，开销较大。如果需要频繁插入删除，用链表更为合适，链表有单向链表，双向链表，循环链表等。链表主要是用指针来进行连接，单链表每个元素有个next指针指向后继节点，双向链表则还多一个prev指针指向前驱结点；后者对于前驱结点相关的操作更加方便。

栈是一种后入先出的结构，比如函数调用使用的就是栈。队列则是先入先出，生活中的排队场景就是这样。对于双端队列，优先队列还不是很熟悉，习题做的也少，后续继续补补。

在刷题过程中，基本上按照老师说的做，想不出来直接看题解，然后吃透，多看多写多思考，不存在看不懂的，我这么笨的多看几遍也会看懂。在做数组题的时候，发现双指针这一解题方法很好用，基本上会让时间复杂度达到O(n)，一次循环即可。做多了的话，就会主动往上面去想，这就是多刷题的好处，懂得套路了，自然就会解题了。关于链表的题目，则是指针变来变去，比较复杂，容易绕晕，这时候就需要多画图来帮助思考和理解了，不要懒，一步一步来，会想明白的。栈的题目给我印象比较深刻的就是单调栈，维护一个有序的栈，通常一次循环即可解决问题，不得不感叹真是太精妙了，我反正是想不到。

队列的题目没做多少，后续补上；跳表的话只是大致了解，其主要是对于查看做了优化，能在O(logn)时间复杂度查找到想要的值，其主要是在上级建立范围跨度更大的一组元素，元素个数会更少，找到了区间，然后会再下级再次查找，直到找到元素。

一周总结如上，我继续刷题去了。。。