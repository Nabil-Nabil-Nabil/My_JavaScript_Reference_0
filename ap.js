// Array Methods
at()
	// Example
		var arr = ['a', 'b', 'c', 'd']
		arr.at()	// This return 'a'
		arr.at(1)	// This return 'b'
		arr.at(-1)	// This return 'd'
	// Description
		// Get the array element by index
	// Note
		// You can use -index 
 	// Syntax
		myArr.at(index)
	// Parameters
		index
			// Optional
			// Default = 0
	// Return
		// Value

concat()
	// Example
		var arr1 = ['a', 'b']
		var arr2 = ['c', 'd']
		arr1.concat(arr2)	// This return ['a', 'b', 'c', 'd']
	// Description
		// Join two arrays or more..
	// Syntax
		arr1.concat(arr2, arr3, /* or more.. */ )
	// Parameters
		arr1, arr2, ...
			// Required
	// Return
		// Array

copyWithin()
	// Example
		var arr1 = ['a', 'b', 'c', '', '', '']
		arr1.copyWithin(3) 	// This return ['a', 'b', 'c', 'a', 'b', 'c']
		var arr2 = ['a', 'b', 'c', '', '', '']
		arr2.copyWithin(3, 0, 1)// This return ['a', 'b', 'c', 'a', '', '']
		var arr3 = ['a', 'b', 'c', '', '', '']
		arr3.copyWithin(3, 0, 2)// This return ['a', 'b', 'c', 'a', 'b', '']
	// Description
		// copies array elements to another position in the array
		// overwrites the existing values
		// does not add items to the array
	// Note
		// It modifies the original array
	// Syntax
		arr.copyWithin(Target, Start, End)
	// Parameters
		// Target
			// Required
		// Start
			// Optional
			// Default = 0
		// End
			// Optional
			// Default = Array.length
			
	// Return
		// Array






































