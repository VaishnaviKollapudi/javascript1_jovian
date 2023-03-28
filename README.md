# javascript1_jovian

The code imports the fs and path modules, as well as a custom commerce module that contains a calculateTotalPrice() function.

The code reads in command-line arguments using the process.argv array, which should contain a file name and a discount percentage.

The code constructs the file paths for the input and output files using the path.join() method to combine the file name with the "input" and "output" directories.

The code logs a message indicating which input file is being processed.

The code checks if the input file exists using the fs.existsSync() method.

If the input file exists, the code reads in the file using the fs.readFileSync() method, parses it as JSON using JSON.parse(), and passes the resulting object to the calculateTotalPrice() function along with the discount percentage.

The calculateTotalPrice() function computes the total price of the items in the cart, along with any applicable discount amount and discounted price.

The code writes the result of the calculation to an output file using the fs.writeFileSync() method and logs a message indicating where the output file was written.
If the input file does not exist, the code logs an error message.