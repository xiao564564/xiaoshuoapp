export default {

	Book: r => require(['@/components/Book'], r),
	Read: r => require(['@/components/Read'], r),
	My: r => require(['@/components/My'], r),
	More: r => require(['@/components/More'], r),
	Index: r => require(['@/components/Index'], r),
	Detailed: r => require(['@/components/Detailed'], r),
	Novel: r => require(['@/components/Novel'], r),
	Search: r => require(['@/components/Search'], r),
	Rank: r => require(['@/components/Rank'], r)
}