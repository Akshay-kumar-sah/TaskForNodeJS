
# Task:

 - Write a NodeJS script that uses a WHOIS lookup library to extract the required details (name, domain name, - email ID, and phone number) for each newly registered domain on a daily basis.

- The script should store the extracted data in a database or CSV file, along with the date and time of  registration.

- Configure a cron job that will run the script on a daily basis at a specified time.

- After the script runs, set it up to send an email with the extracted data to a specified email address.

- Make sure that the script can handle any errors that may occur during execution, and logs these errors in a separate file.

- Consider implementing additional features such as deduplication of the extracted data and filtering out irrelevant data.

- Test the script thoroughly to ensure that it performs as expected and handles errors gracefully.

- Here are some libraries that may be helpful for this task:

- NodeJS-whois: A library that provides a simple way to retrieve WHOIS information for domains.

- Schedule: A NodeJS library that allows you to schedule tasks to run at specific intervals.

- Pandas: A data analysis library that can be used to store the extracted data in a CSV file.

- SMTP: A NodeJS library that can be used to send emails from a script.
