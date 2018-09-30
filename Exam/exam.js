db.messages.aggregate([
	{$match:
		{
			"headers.From":["susan.mara@enron.com","soblander@carrfut.com","evelyn.metoyer@enron.com"]
		}
	},
	{$project: {
		_id:0,
		from: "$headers.From",
		to: "$headers.To"
	},
    {$unwind:"$to"},
	{$group:
		{
			_id:{from:"$from", to:"$to"},
			cnt:{$sum:1}
		}
	}
])

db.posts.aggregate([
    {$unwind:"$comments"},
    {$group:
     {
	 _id: "$comments.author",
	 num_com: {$sum:1},
     }
    },
    {$sort:
     {
	 num_com:-1
     }
    },
    {$limit: 1}
])