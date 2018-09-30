db.grades.aggregate([
    {$unwind:"$scores"},
	{$match:
     {
	 "scores.type":{$ne:"quiz"}
     }
    },
	{$group:
	 {
	 _id:{student:"$student_id", class:"$class_id"},
     score:{$avg:"$scores.score"}
	 }
	},
	{$group:
	 {
	 _id:"$_id.class",
  	 scores:{$avg:"$score"}
	 }
	},
    {$sort:
     {
	 scores:-1
     }
    },
    {$limit: 1}
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