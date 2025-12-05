import { Skill } from './types';

export const SKILLS: Skill[] = [
  {
    id: 'python',
    title: 'Python for Hackers',
    icon: 'Terminal',
    description: 'Master Python basics, control flow, data structures, and modular programming tailored for security tasks.',
    color: 'text-yellow-400',
    levels: [
      {
        id: 'py-l1',
        title: 'Level 1: Basics & Data Types',
        description: 'Variables, Strings, Numbers, Booleans, I/O',
        exercises: [
          { id: 'py-1-1', title: 'Hello Hacker', description: 'Print "Hello, Hacker!" to the console.', starterCode: '# Write your code here\n', difficulty: 'easy', xpReward: 10, hints: ['Use the print() function.'] },
          { id: 'py-1-2', title: 'Welcome User', description: 'Ask the user for their name and print "Welcome, [name]!".', starterCode: 'name = input("Enter name: ")\n', difficulty: 'easy', xpReward: 15, hints: ['Combine strings using + or f-strings.'] },
          { id: 'py-1-3', title: 'String to Int', description: 'Convert "1337" to an integer and add 10.', starterCode: 'num_str = "1337"\n', difficulty: 'easy', xpReward: 15, hints: ['Use int() to convert.'] },
          { id: 'py-1-4', title: 'Math Ops', description: 'Ask for two numbers and print their sum, difference, product, and quotient.', starterCode: '', difficulty: 'easy', xpReward: 20, hints: ['Input returns strings, remember to convert to float/int.'] },
          { id: 'py-1-5', title: 'Reverse String', description: 'Reverse "rekcah_repus" without built-in functions.', starterCode: 's = "rekcah_repus"\n', difficulty: 'medium', xpReward: 30, hints: ['You can use slicing with a step of -1.'] },
          { id: 'py-1-6', title: 'Even or Odd', description: 'Check if a number is even or odd.', starterCode: '', difficulty: 'easy', xpReward: 15, hints: ['Use the modulo operator %.'] },
          { id: 'py-1-7', title: 'Boolean Storage', description: 'Create a variable that stores a boolean value and print it.', starterCode: '', difficulty: 'easy', xpReward: 10, hints: ['True or False (capitalized).'] },
          { id: 'py-1-8', title: 'Binary to Decimal', description: 'Convert "100101" to a decimal number.', starterCode: 'b = "100101"\n', difficulty: 'medium', xpReward: 20, hints: ['int(string, base)'] },
          { id: 'py-1-9', title: 'Alternating Caps', description: 'Print "H4ck3r" with alternating uppercase and lowercase letters.', starterCode: 's = "H4ck3r"\n', difficulty: 'medium', xpReward: 25, hints: ['Enumerate might help.'] },
          { id: 'py-1-10', title: 'Vowel Replacement', description: 'Replace all vowels in "P@ssw0rd" with "*".', starterCode: 'pwd = "P@ssw0rd"\n', difficulty: 'medium', xpReward: 25, hints: ['Iterate or use .replace() for each vowel.'] },
        ]
      },
      {
        id: 'py-l2',
        title: 'Level 2: Control Flow',
        description: 'Loops, Conditionals, Logic',
        exercises: [
          { id: 'py-2-1', title: 'Password Gate', description: 'Ask for a password. Only allow access if it matches "s3cr3t".', starterCode: '', difficulty: 'medium', xpReward: 20, hints: ['Use an if statement.'] },
          { id: 'py-2-2', title: 'Skip Fours', description: 'Print 1-100 except numbers divisible by 4.', starterCode: '', difficulty: 'easy', xpReward: 20, hints: ['continue statement or if not divisible.'] },
          { id: 'py-2-3', title: 'PIN Brute', description: 'Print every 4-digit PIN code (0000-9999).', starterCode: '', difficulty: 'easy', xpReward: 20, hints: ['range(10000) and zfill(4).'] },
          { id: 'py-2-4', title: 'Leap Year', description: 'Check if a given year is a leap year.', starterCode: 'year = 2024\n', difficulty: 'medium', xpReward: 25, hints: ['Divisible by 4, unless 100 but not 400.'] },
          { id: 'py-2-5', title: 'Prime Finder', description: 'Find all prime numbers between 1 and 100.', starterCode: '', difficulty: 'hard', xpReward: 50, hints: ['Nested loops are needed.'] },
          { id: 'py-2-6', title: 'Login Lockout', description: 'Simulate a login system that locks after 3 failed attempts.', starterCode: '', difficulty: 'medium', xpReward: 30, hints: ['Use a while loop and a counter.'] },
          { id: 'py-2-7', title: 'Number Guessing', description: 'Create a number guessing game.', starterCode: 'import random\nsecret = random.randint(1, 100)\n', difficulty: 'medium', xpReward: 30, hints: ['while input != secret.'] },
          { id: 'py-2-8', title: 'FizzBuzz', description: 'Print 1-100. Multiples of 3: "Fizz", 5: "Buzz", both: "FizzBuzz".', starterCode: '', difficulty: 'medium', xpReward: 30, hints: ['Check % 15 first or check both conditions.'] },
          { id: 'py-2-9', title: 'Persistent Auth', description: 'Continuously ask for a password until the correct one is entered.', starterCode: '', difficulty: 'easy', xpReward: 20, hints: ['while True break'] },
          { id: 'py-2-10', title: 'Palindrome', description: 'Check if a string is a palindrome.', starterCode: 's = "racecar"\n', difficulty: 'easy', xpReward: 20, hints: ['Compare string to its reverse.'] },
        ]
      },
      {
        id: 'py-l3',
        title: 'Level 3: Structures',
        description: 'Lists, Tuples, Dictionaries',
        exercises: [
          { id: 'py-3-1', title: 'Hacker Tools List', description: 'Create a list of 5 hacker tools and print the list.', starterCode: 'tools = ["Nmap", "Metasploit", "Wireshark", "Burp", "John"]\n', difficulty: 'easy', xpReward: 20, hints: ['[] syntax.'] },
          { id: 'py-3-2', title: 'Select Item', description: 'Print the 3rd item in your list.', starterCode: '', difficulty: 'easy', xpReward: 10, hints: ['Index starts at 0.'] },
          { id: 'py-3-3', title: 'HTTP Codes', description: 'Create a dictionary of HTTP codes (200, 404) and print them.', starterCode: '', difficulty: 'easy', xpReward: 20, hints: ['Use curly braces {} for dicts.'] },
          { id: 'py-3-4', title: 'Char Frequency', description: 'Count how many times each letter appears in a string.', starterCode: 's = "hello world"\n', difficulty: 'medium', xpReward: 30, hints: ['Use a dict to store counts.'] },
          { id: 'py-3-5', title: 'Manual Sort', description: 'Sort a list of random numbers without using .sort().', starterCode: 'nums = [5, 2, 9, 1, 5, 6]\n', difficulty: 'hard', xpReward: 40, hints: ['Bubble sort implementation.'] },
          { id: 'py-3-6', title: 'Port Service Dict', description: 'Store ports and services in a dict and allow queries.', starterCode: '', difficulty: 'medium', xpReward: 25, hints: ['d.get(port, "Unknown")'] },
          { id: 'py-3-7', title: 'Deduplicate', description: 'Function to remove duplicates from a list.', starterCode: '', difficulty: 'medium', xpReward: 25, hints: ['Convert to set and back to list.'] },
          { id: 'py-3-8', title: 'CSV Converter', description: 'Convert a list into a comma-separated string.', starterCode: 'l = ["a", "b", "c"]\n', difficulty: 'easy', xpReward: 15, hints: ['",".join(list)'] },
          { id: 'py-3-9', title: 'Longest Word', description: 'Find the longest word in a list.', starterCode: '', difficulty: 'medium', xpReward: 25, hints: ['max(list, key=len)'] },
          { id: 'py-3-10', title: 'Password Lookup', description: 'Given a dict of users/passwords, print the password for a user.', starterCode: '', difficulty: 'easy', xpReward: 20, hints: ['Simple key lookup.'] },
        ]
      },
      {
        id: 'py-l4',
        title: 'Level 4: Functions & Modules',
        description: 'Function Definitions, Arguments, Imports',
        exercises: [
          { id: 'py-4-1', title: 'Reverse Func', description: 'Write a function that reverses a string.', starterCode: 'def reverse_str(s):\n    pass', difficulty: 'medium', xpReward: 25, hints: ['Return the sliced string.'] },
          { id: 'py-4-2', title: 'Strong Password', description: 'Check if a password is strong (>=8 chars, numbers, special).', starterCode: '', difficulty: 'hard', xpReward: 40, hints: ['Use regex or multiple checks.'] },
          { id: 'py-4-3', title: 'Random Pass Gen', description: 'Generate a random password of 12 characters.', starterCode: 'import random\nimport string\n', difficulty: 'medium', xpReward: 30, hints: ['random.choice() from string.printable'] },
          { id: 'py-4-4', title: 'MD5 Hasher', description: 'Create an MD5 hash of a user string.', starterCode: 'import hashlib\n', difficulty: 'medium', xpReward: 30, hints: ['hashlib.md5(b"str").hexdigest()'] },
          { id: 'py-4-5', title: 'IP Validator Func', description: 'Check if an IP address is valid.', starterCode: '', difficulty: 'medium', xpReward: 30, hints: ['ipaddress module or regex.'] },
          { id: 'py-4-6', title: 'MAC Generator', description: 'Generate random MAC addresses.', starterCode: '', difficulty: 'medium', xpReward: 30, hints: ['Format pairs of hex digits.'] },
          { id: 'py-4-7', title: 'XOR Encryption', description: 'Implement a basic XOR encryption function.', starterCode: '', difficulty: 'hard', xpReward: 45, hints: ['ord(c) ^ key'] },
          { id: 'py-4-8', title: 'UUID Gen', description: 'Generate a random device ID using uuid.', starterCode: 'import uuid\n', difficulty: 'easy', xpReward: 15, hints: ['uuid.uuid4()'] },
          { id: 'py-4-9', title: 'DNS Resolve', description: 'Resolve a hostname to an IP.', starterCode: 'import socket\n', difficulty: 'medium', xpReward: 25, hints: ['socket.gethostbyname()'] },
          { id: 'py-4-10', title: 'Vowel Extractor', description: 'Extract all vowels from a string.', starterCode: '', difficulty: 'easy', xpReward: 20, hints: ['List comprehension.'] },
        ]
      }
    ]
  },
  {
    id: 'networks',
    title: 'Network Operations',
    icon: 'Globe',
    description: 'Understand IP addressing, Subnetting, Ports, Protocols (TCP/UDP), and basic scanning logic.',
    color: 'text-blue-400',
    levels: [
      {
        id: 'net-d1',
        title: 'Day 1: IPs & Subnetting',
        description: 'IPv4, IPv6, CIDR, Classes',
        exercises: [
          { id: 'net-1-1', title: 'IP Validator', description: 'Validate whether a given IP is IPv4 or IPv6.', starterCode: 'import ipaddress\n', difficulty: 'medium', xpReward: 30, hints: ['ipaddress.ip_address()'] },
          { id: 'net-1-2', title: 'Binary IP', description: 'Convert IPv4 from dotted-decimal to binary.', starterCode: '', difficulty: 'medium', xpReward: 30, hints: ['Split by dot, format to binary.'] },
          { id: 'net-1-3', title: 'IP Extractor', description: 'Extract all IP addresses from a text block.', starterCode: 'text = "Host 192.168.1.1 and 10.0.0.1"\n', difficulty: 'medium', xpReward: 35, hints: ['Regular expressions (re module).'] },
          { id: 'net-1-4', title: 'Private Check', description: 'Check if an IP belongs to a private network.', starterCode: 'ip = "192.168.1.5"\n', difficulty: 'easy', xpReward: 20, hints: ['ipaddress object .is_private'] },
          { id: 'net-1-5', title: 'Subnet Calc', description: 'Given IP and mask, calc network and broadcast.', starterCode: '', difficulty: 'hard', xpReward: 40, hints: ['ipaddress.IPv4Network(..., strict=False)'] },
          { id: 'net-1-6', title: 'IP Generator', description: 'Generate all IPs in a 192.168.1.0/24 subnet.', starterCode: '', difficulty: 'medium', xpReward: 30, hints: ['Iterate over IPv4Network'] },
          { id: 'net-1-7', title: 'Ping Check', description: 'Check if an IP is reachable (simulated).', starterCode: 'import os\n', difficulty: 'easy', xpReward: 20, hints: ['os.system("ping...")'] },
          { id: 'net-1-8', title: 'IPv6 Expand', description: 'Convert IPv6 to compressed and expanded forms.', starterCode: '', difficulty: 'medium', xpReward: 25, hints: ['ipaddress module handles this.'] },
          { id: 'net-1-9', title: 'Classful IP', description: 'Determine the class (A, B, C) of an IP.', starterCode: '', difficulty: 'easy', xpReward: 20, hints: ['Check first octet range.'] },
          { id: 'net-1-10', title: 'Subnet Match', description: 'Determine if two IPs are in the same subnet.', starterCode: '', difficulty: 'medium', xpReward: 30, hints: ['Compare network addresses.'] },
        ]
      },
      {
        id: 'net-d2',
        title: 'Day 2: Ports & Protocols',
        description: 'Common Ports, TCP vs UDP',
        exercises: [
          { id: 'net-2-1', title: 'Service Mapper', description: 'Print common ports mapped to services.', starterCode: '', difficulty: 'easy', xpReward: 15, hints: ['Use a dict.'] },
          { id: 'net-2-2', title: 'Port Validator', description: 'Check if a port number is valid (0-65535).', starterCode: '', difficulty: 'easy', xpReward: 10, hints: ['Range check.'] },
          { id: 'net-2-3', title: 'Mini Scanner', description: 'Scan first 1000 ports of localhost (Simulated).', starterCode: '', difficulty: 'hard', xpReward: 50, hints: ['socket.connect_ex'] },
          { id: 'net-2-4', title: 'Proto Detector', description: 'Detect if a port uses TCP or UDP (Dictionary lookup).', starterCode: '', difficulty: 'easy', xpReward: 15, hints: ['/etc/services logic or dict.'] },
          { id: 'net-2-5', title: 'Random Ports', description: 'Generate 5 open ports between 1024-65535.', starterCode: '', difficulty: 'easy', xpReward: 15, hints: ['random.randint'] },
          { id: 'net-2-6', title: 'Privileged Port', description: 'Check if a port is privileged (<1024).', starterCode: '', difficulty: 'easy', xpReward: 10, hints: ['< 1024'] },
          { id: 'net-2-7', title: 'Local Listeners', description: 'Find listening ports on local machine.', starterCode: '', difficulty: 'medium', xpReward: 30, hints: ['psutil or netstat wrap.'] },
          { id: 'net-2-8', title: 'TCP Scanner', description: 'Implement basic TCP connect scanner.', starterCode: 'import socket\n', difficulty: 'medium', xpReward: 40, hints: ['Try/Except connection.'] },
          { id: 'net-2-9', title: 'UDP Scanner', description: 'Implement basic UDP scanner.', starterCode: '', difficulty: 'hard', xpReward: 45, hints: ['Send data, wait for ICMP unreach.'] },
          { id: 'net-2-10', title: 'Reserved Ports', description: 'List reserved ports common in hacking.', starterCode: '', difficulty: 'easy', xpReward: 20, hints: ['Print list.'] },
        ]
      },
      {
        id: 'net-d3',
        title: 'Day 3: TCP & UDP',
        description: 'Sockets, Packets, Connections',
        exercises: [
          { id: 'net-3-1', title: 'TCP Client', description: 'Send a message from client to server.', starterCode: 'import socket\n', difficulty: 'medium', xpReward: 30, hints: ['socket.SOCK_STREAM'] },
          { id: 'net-3-2', title: 'UDP Client', description: 'Modify to work with UDP.', starterCode: '', difficulty: 'medium', xpReward: 30, hints: ['socket.SOCK_DGRAM'] },
          { id: 'net-3-3', title: 'TCP Server', description: 'Listen on 9999 and respond "Hello".', starterCode: '', difficulty: 'medium', xpReward: 40, hints: ['bind, listen, accept'] },
          { id: 'net-3-4', title: 'RTT Measure', description: 'Measure Round Trip Time of a connection.', starterCode: 'import time\n', difficulty: 'medium', xpReward: 30, hints: ['Time before and after connect.'] },
          { id: 'net-3-5', title: 'SYN Flood Sim', description: 'Simulate SYN flood logic (Print only).', starterCode: '', difficulty: 'easy', xpReward: 20, hints: ['Loop sending SYN packets concept.'] },
          { id: 'net-3-6', title: 'Conn Monitor', description: 'Monitor and log incoming TCP connections.', starterCode: '', difficulty: 'hard', xpReward: 50, hints: ['Server loop logging addr.'] },
          { id: 'net-3-7', title: 'Handshake Sim', description: 'Simulate TCP 3-way handshake in print statements.', starterCode: '', difficulty: 'easy', xpReward: 15, hints: ['SYN, SYN-ACK, ACK'] },
          { id: 'net-3-8', title: 'Telnet Check', description: 'Test if remote allows telnet (port 23).', starterCode: '', difficulty: 'easy', xpReward: 20, hints: ['Connect to port 23.'] },
          { id: 'net-3-9', title: 'Manual DNS', description: 'Send a DNS request manually via UDP.', starterCode: '', difficulty: 'hard', xpReward: 60, hints: ['Construct DNS query packet bytes.'] },
          { id: 'net-3-10', title: 'Packet Sniffer', description: 'Simple packet sniffer skeleton.', starterCode: '', difficulty: 'hard', xpReward: 60, hints: ['socket.AF_PACKET (Linux) or raw sockets.'] },
        ]
      }
    ]
  },
  {
    id: 'windows',
    title: 'Windows Systems',
    icon: 'Monitor',
    description: 'OS Detection, Process Management, Services, Registry, and File System automation.',
    color: 'text-cyan-400',
    levels: [
      {
        id: 'win-d1',
        title: 'Day 1: SysInfo',
        description: 'Environment Variables, Architecture',
        exercises: [
          { id: 'win-1-1', title: 'OS Version', description: 'Print the Windows version.', starterCode: 'import platform\n', difficulty: 'easy', xpReward: 15, hints: ['platform.system()'] },
          { id: 'win-1-2', title: 'WhoAmI', description: 'Print computer name and current user.', starterCode: 'import os\n', difficulty: 'easy', xpReward: 15, hints: ['os.getlogin()'] },
          { id: 'win-1-3', title: 'Env Vars', description: 'List all environment variables.', starterCode: '', difficulty: 'easy', xpReward: 15, hints: ['os.environ'] },
          { id: 'win-1-4', title: 'CWD', description: 'Get current working directory.', starterCode: '', difficulty: 'easy', xpReward: 10, hints: ['os.getcwd()'] },
          { id: 'win-1-5', title: 'Arch Check', description: 'Display system architecture (32/64).', starterCode: '', difficulty: 'easy', xpReward: 15, hints: ['platform.architecture()'] },
          { id: 'win-1-6', title: 'Home Dir', description: 'Retrieve user home directory.', starterCode: '', difficulty: 'easy', xpReward: 10, hints: ['os.path.expanduser("~")'] },
          { id: 'win-1-7', title: 'Is Windows?', description: 'Detect if system is Windows.', starterCode: '', difficulty: 'easy', xpReward: 10, hints: ['if "Windows" in platform...'] },
          { id: 'win-1-8', title: 'Boot Time', description: 'Print system boot time.', starterCode: 'import psutil\n', difficulty: 'medium', xpReward: 25, hints: ['psutil.boot_time()'] },
          { id: 'win-1-9', title: 'CPU Info', description: 'Print CPU name and cores.', starterCode: '', difficulty: 'medium', xpReward: 20, hints: ['psutil.cpu_count()'] },
          { id: 'win-1-10', title: 'Path Checker', description: 'Check if PATH variable exists.', starterCode: '', difficulty: 'easy', xpReward: 15, hints: ['"PATH" in os.environ'] },
        ]
      },
      {
        id: 'win-d2',
        title: 'Day 2: Processes',
        description: 'Listing, Killing, Monitoring Processes',
        exercises: [
          { id: 'win-2-1', title: 'Process List', description: 'List running processes with PID.', starterCode: 'import psutil\n', difficulty: 'medium', xpReward: 30, hints: ['psutil.process_iter()'] },
          { id: 'win-2-2', title: 'Kill Process', description: 'Script to kill a process by name.', starterCode: '', difficulty: 'medium', xpReward: 30, hints: ['proc.kill()'] },
          { id: 'win-2-3', title: 'Spawn Process', description: 'Start Notepad from Python.', starterCode: '', difficulty: 'easy', xpReward: 20, hints: ['subprocess.Popen'] },
          { id: 'win-2-4', title: 'Top CPU', description: 'Monitor top 5 CPU processes.', starterCode: '', difficulty: 'medium', xpReward: 35, hints: ['Sort process_iter by cpu_percent.'] },
          { id: 'win-2-5', title: 'Proc Detect', description: 'Detect if explorer.exe is running.', starterCode: '', difficulty: 'easy', xpReward: 20, hints: ['Iterate and check name.'] },
          { id: 'win-2-6', title: 'Restart Svc', description: 'Script to restart a service (Simulated).', starterCode: '', difficulty: 'hard', xpReward: 40, hints: ['win32serviceutil (if avail) or subprocess sc.exe'] },
          { id: 'win-2-7', title: 'List Svcs', description: 'List all services and status.', starterCode: '', difficulty: 'medium', xpReward: 30, hints: ['psutil.win_service_iter()'] },
          { id: 'win-2-8', title: 'Svc Control', description: 'Start/Stop service programmatically.', starterCode: '', difficulty: 'hard', xpReward: 40, hints: ['subprocess net start/stop'] },
          { id: 'win-2-9', title: 'TaskMgr Clone', description: 'Simple task manager refreshing every 5s.', starterCode: '', difficulty: 'hard', xpReward: 50, hints: ['Loop with time.sleep'] },
          { id: 'win-2-10', title: 'User Procs', description: 'Terminate processes by specific user.', starterCode: '', difficulty: 'medium', xpReward: 35, hints: ['Check proc.username()'] },
        ]
      },
      {
        id: 'win-d3',
        title: 'Day 3: Files & Auto',
        description: 'File Ops, Backups, Monitoring',
        exercises: [
          { id: 'win-3-1', title: 'List Files', description: 'List files in Users/Public.', starterCode: '', difficulty: 'easy', xpReward: 15, hints: ['os.listdir'] },
          { id: 'win-3-2', title: 'Copy File', description: 'Copy file from A to B.', starterCode: 'import shutil\n', difficulty: 'easy', xpReward: 15, hints: ['shutil.copy()'] },
          { id: 'win-3-3', title: 'File Monitor', description: 'Monitor directory for changes.', starterCode: '', difficulty: 'hard', xpReward: 50, hints: ['Watchdog lib or polling modification times.'] },
          { id: 'win-3-4', title: 'File Sizes', description: 'Find size of every file in folder.', starterCode: '', difficulty: 'medium', xpReward: 20, hints: ['os.path.getsize'] },
          { id: 'win-3-5', title: 'Daily Backup', description: 'Script to backup a folder.', starterCode: '', difficulty: 'medium', xpReward: 30, hints: ['shutil.make_archive'] },
          { id: 'win-3-6', title: 'File Search', description: 'Search for file by name recursively.', starterCode: '', difficulty: 'medium', xpReward: 30, hints: ['os.walk'] },
          { id: 'win-3-7', title: 'Temp Monitor', description: 'Monitor new files in Temp.', starterCode: '', difficulty: 'medium', xpReward: 35, hints: ['Polling listdir.'] },
          { id: 'win-3-8', title: 'Zipper', description: 'Script to zip and unzip folders.', starterCode: 'import zipfile\n', difficulty: 'medium', xpReward: 30, hints: ['zipfile.ZipFile'] },
          { id: 'win-3-9', title: 'Recent Mods', description: 'List files modified in last 24h.', starterCode: '', difficulty: 'medium', xpReward: 35, hints: ['os.path.getmtime vs time.time'] },
          { id: 'win-3-10', title: 'Big Files', description: 'Find files > 100MB.', starterCode: '', difficulty: 'medium', xpReward: 25, hints: ['Check size in loop.'] },
        ]
      }
    ]
  },
  {
    id: 'linux',
    title: 'Linux Bash',
    icon: 'Cpu',
    description: 'System Basics, Permissions, Files, Process Management using Python/Bash logic.',
    color: 'text-orange-400',
    levels: [
      {
        id: 'lin-d1',
        title: 'Day 1: System Basics',
        description: 'Distro info, UID, Hostname',
        exercises: [
          { id: 'lin-1-1', title: 'Distro Info', description: 'Display Linux distro name/version.', starterCode: 'import platform\n', difficulty: 'easy', xpReward: 15, hints: ['platform.linux_distribution()'] },
          { id: 'lin-1-2', title: 'User Info', description: 'Print username and UID.', starterCode: 'import os\n', difficulty: 'easy', xpReward: 15, hints: ['os.getuid()'] },
          { id: 'lin-1-3', title: 'Host IP', description: 'Show hostname and local IP.', starterCode: '', difficulty: 'easy', xpReward: 15, hints: ['socket.gethostname()'] },
          { id: 'lin-1-4', title: 'Env Vars', description: 'List all env vars.', starterCode: '', difficulty: 'easy', xpReward: 15, hints: ['os.environ'] },
          { id: 'lin-1-5', title: 'OS Check', description: 'Detect if running Linux.', starterCode: '', difficulty: 'easy', xpReward: 10, hints: ['platform.system() == "Linux"'] },
          { id: 'lin-1-6', title: 'Uptime', description: 'Display system uptime.', starterCode: '', difficulty: 'medium', xpReward: 20, hints: ['Read /proc/uptime'] },
          { id: 'lin-1-7', title: 'CPU Cores', description: 'Show CPU model and cores.', starterCode: '', difficulty: 'medium', xpReward: 20, hints: ['/proc/cpuinfo or psutil'] },
          { id: 'lin-1-8', title: 'RAM Info', description: 'Display total/available RAM.', starterCode: '', difficulty: 'medium', xpReward: 20, hints: ['/proc/meminfo or psutil'] },
          { id: 'lin-1-9', title: 'Arch', description: 'System 32-bit or 64-bit?', starterCode: '', difficulty: 'easy', xpReward: 10, hints: ['platform.architecture()'] },
          { id: 'lin-1-10', title: 'Live Monitor', description: 'Monitor CPU/Mem usage live.', starterCode: '', difficulty: 'hard', xpReward: 40, hints: ['Loop printing psutil stats.'] },
        ]
      },
      {
        id: 'lin-d2',
        title: 'Day 2: Files & Perms',
        description: 'File creation, chmod logic',
        exercises: [
          { id: 'lin-2-1', title: 'File Creator', description: 'Create "hello.txt" with text.', starterCode: '', difficulty: 'easy', xpReward: 15, hints: ['open(..., "w")'] },
          { id: 'lin-2-2', title: 'File Size', description: 'Check size of file in bytes.', starterCode: '', difficulty: 'easy', xpReward: 10, hints: ['os.path.getsize'] },
          { id: 'lin-2-3', title: 'List Perms', description: 'List files with permissions.', starterCode: '', difficulty: 'medium', xpReward: 25, hints: ['os.stat().st_mode'] },
          { id: 'lin-2-4', title: 'Chmod', description: 'Change perms to executable.', starterCode: '', difficulty: 'medium', xpReward: 20, hints: ['os.chmod(path, 0o755)'] },
          { id: 'lin-2-5', title: 'Recursive Chown', description: 'Recursively change owner (Simulated).', starterCode: '', difficulty: 'hard', xpReward: 30, hints: ['os.walk + os.chown'] },
          { id: 'lin-2-6', title: 'Find Large', description: 'Find files > 100MB.', starterCode: '', difficulty: 'medium', xpReward: 25, hints: ['os.walk size check'] },
          { id: 'lin-2-7', title: 'Symlink', description: 'Create a symbolic link.', starterCode: '', difficulty: 'medium', xpReward: 20, hints: ['os.symlink'] },
          { id: 'lin-2-8', title: 'Show Owner', description: 'Display owner of a file.', starterCode: '', difficulty: 'medium', xpReward: 20, hints: ['pwd.getpwuid(os.stat().st_uid)'] },
          { id: 'lin-2-9', title: 'Diff Files', description: 'Compare contents of two files.', starterCode: '', difficulty: 'medium', xpReward: 25, hints: ['Read both and =='] },
          { id: 'lin-2-10', title: 'Disk Usage', description: 'Show usage of /home subdirs.', starterCode: '', difficulty: 'hard', xpReward: 35, hints: ['shutil.disk_usage'] },
        ]
      },
      {
        id: 'lin-d3',
        title: 'Day 3: Services',
        description: 'Processes, Systemd, Logs',
        exercises: [
          { id: 'lin-3-1', title: 'List Procs', description: 'List running processes.', starterCode: '', difficulty: 'easy', xpReward: 20, hints: ['psutil.process_iter'] },
          { id: 'lin-3-2', title: 'Find PID', description: 'Find PID of "sshd".', starterCode: '', difficulty: 'medium', xpReward: 20, hints: ['Filter process list.'] },
          { id: 'lin-3-3', title: 'Kill Proc', description: 'Kill process by name.', starterCode: '', difficulty: 'medium', xpReward: 25, hints: ['proc.terminate()'] },
          { id: 'lin-3-4', title: 'Mem Usage', description: 'Memory usage of specific proc.', starterCode: '', difficulty: 'medium', xpReward: 25, hints: ['proc.memory_info()'] },
          { id: 'lin-3-5', title: 'Top CPU', description: 'Show top 5 CPU processes.', starterCode: '', difficulty: 'medium', xpReward: 30, hints: ['Sort by cpu_percent'] },
          { id: 'lin-3-6', title: 'Start Svc', description: 'Start systemd service (cmd).', starterCode: '', difficulty: 'medium', xpReward: 20, hints: ['subprocess "systemctl start"'] },
          { id: 'lin-3-7', title: 'Check Enabled', description: 'Check if service enabled at boot.', starterCode: '', difficulty: 'medium', xpReward: 20, hints: ['systemctl is-enabled'] },
          { id: 'lin-3-8', title: 'Restart Svc', description: 'Restart apache2 service.', starterCode: '', difficulty: 'medium', xpReward: 20, hints: ['systemctl restart'] },
          { id: 'lin-3-9', title: 'View Logs', description: 'View service logs.', starterCode: '', difficulty: 'easy', xpReward: 15, hints: ['journalctl -u'] },
          { id: 'lin-3-10', title: 'Activity Mon', description: 'Monitor live process activity.', starterCode: '', difficulty: 'hard', xpReward: 40, hints: ['Loop with sleep.'] },
        ]
      }
    ]
  },
  {
    id: 'crypto',
    title: 'Cryptography',
    icon: 'Lock',
    description: 'Encoding, Hashing (MD5, SHA), Symmetric (AES), and Asymmetric (RSA) encryption.',
    color: 'text-purple-500',
    levels: [
      {
        id: 'cry-d1',
        title: 'Day 1: Hashing',
        description: 'Base64, Hex, MD5, SHA',
        exercises: [
          { id: 'cry-1-1', title: 'Base64', description: 'Encode/Decode Base64.', starterCode: 'import base64\n', difficulty: 'easy', xpReward: 20, hints: ['b64encode/b64decode'] },
          { id: 'cry-1-2', title: 'Hex', description: 'String to Hex representation.', starterCode: '', difficulty: 'easy', xpReward: 15, hints: ['.encode().hex()'] },
          { id: 'cry-1-3', title: 'MD5 File', description: 'MD5 hash of a file.', starterCode: 'import hashlib\n', difficulty: 'medium', xpReward: 25, hints: ['Read file in binary mode.'] },
          { id: 'cry-1-4', title: 'SHA1', description: 'SHA-1 hash of string.', starterCode: '', difficulty: 'easy', xpReward: 15, hints: ['hashlib.sha1()'] },
          { id: 'cry-1-5', title: 'SHA256 Tool', description: 'Tool for SHA-256 hashing.', starterCode: '', difficulty: 'easy', xpReward: 20, hints: ['hashlib.sha256()'] },
          { id: 'cry-1-6', title: 'File Integrity', description: 'Check if two files have same SHA256.', starterCode: '', difficulty: 'medium', xpReward: 30, hints: ['Compare digests.'] },
          { id: 'cry-1-7', title: 'PIN Brute', description: 'Bruteforce MD5 of 4-digit PIN.', starterCode: '', difficulty: 'hard', xpReward: 50, hints: ['Loop 0000-9999, hash, compare.'] },
          { id: 'cry-1-8', title: 'B64 File', description: 'Base64 encode a file safe.', starterCode: '', difficulty: 'medium', xpReward: 25, hints: ['Read rb, b64encode.'] },
          { id: 'cry-1-9', title: 'Detect Enc', description: 'Detect if string is Base64 or Hex.', starterCode: '', difficulty: 'medium', xpReward: 30, hints: ['Try decode, check chars.'] },
          { id: 'cry-1-10', title: 'Multi Hash', description: 'Hash text with MD5, SHA1, SHA256.', starterCode: '', difficulty: 'easy', xpReward: 25, hints: ['Call all functions.'] },
        ]
      },
      {
        id: 'cry-d2',
        title: 'Day 2: Symmetric',
        description: 'AES, DES, Block Modes',
        exercises: [
          { id: 'cry-2-1', title: 'AES-ECB', description: 'Encrypt/Decrypt AES-ECB.', starterCode: 'from Crypto.Cipher import AES\n', difficulty: 'medium', xpReward: 35, hints: ['Need 16-byte key.'] },
          { id: 'cry-2-2', title: 'AES-CBC', description: 'Encrypt/Decrypt AES-CBC.', starterCode: '', difficulty: 'medium', xpReward: 35, hints: ['Need Key and IV.'] },
          { id: 'cry-2-3', title: 'Random Key', description: 'Generate 256-bit AES key.', starterCode: 'import os\n', difficulty: 'easy', xpReward: 20, hints: ['os.urandom(32)'] },
          { id: 'cry-2-4', title: 'PKCS7', description: 'Pad and unpad plaintext.', starterCode: '', difficulty: 'medium', xpReward: 30, hints: ['Add bytes to length % 16 == 0'] },
          { id: 'cry-2-5', title: 'File Enc', description: 'Encrypt file with AES.', starterCode: '', difficulty: 'hard', xpReward: 50, hints: ['Read file, encrypt, write.'] },
          { id: 'cry-2-6', title: 'File Dec', description: 'Decrypt AES file.', starterCode: '', difficulty: 'hard', xpReward: 50, hints: ['Read encrypted, decrypt, write.'] },
          { id: 'cry-2-7', title: 'DES', description: 'Encrypt string with DES.', starterCode: '', difficulty: 'medium', xpReward: 30, hints: ['Crypto.Cipher.DES'] },
          { id: 'cry-2-8', title: 'Mode Comp', description: 'Compare ECB vs CBC pattern.', starterCode: '', difficulty: 'medium', xpReward: 30, hints: ['Encrypt repeating text.'] },
          { id: 'cry-2-9', title: 'Mini Tool', description: 'CLI tool for text encryption.', starterCode: '', difficulty: 'hard', xpReward: 40, hints: ['Input key, text, mode.'] },
          { id: 'cry-2-10', title: 'CTR Mode', description: 'Implement AES-CTR manually.', starterCode: '', difficulty: 'hard', xpReward: 60, hints: ['XOR keystream.'] },
        ]
      },
      {
        id: 'cry-d3',
        title: 'Day 3: Asymmetric',
        description: 'RSA, Keys, Signing',
        exercises: [
          { id: 'cry-3-1', title: 'RSA Pairs', description: 'Generate RSA keypair.', starterCode: 'from Crypto.PublicKey import RSA\n', difficulty: 'medium', xpReward: 30, hints: ['RSA.generate(2048)'] },
          { id: 'cry-3-2', title: 'RSA Enc', description: 'Encrypt with Public, Decrypt with Private.', starterCode: '', difficulty: 'medium', xpReward: 35, hints: ['PKCS1_OAEP'] },
          { id: 'cry-3-3', title: 'Signing', description: 'Sign message with Private Key.', starterCode: '', difficulty: 'medium', xpReward: 35, hints: ['pkcs1_15.new(key).sign(hash)'] },
          { id: 'cry-3-4', title: 'Verify', description: 'Verify signature with Public Key.', starterCode: '', difficulty: 'medium', xpReward: 35, hints: ['pkcs1_15.new(key).verify()'] },
          { id: 'cry-3-5', title: 'PEM Files', description: 'Save and load keys from PEM.', starterCode: '', difficulty: 'easy', xpReward: 20, hints: ['key.export_key()'] },
          { id: 'cry-3-6', title: 'OAEP Tool', description: 'Mini tool for RSA-OAEP.', starterCode: '', difficulty: 'medium', xpReward: 40, hints: ['Integrate prev steps.'] },
          { id: 'cry-3-7', title: 'Hybrid', description: 'Encrypt AES key with RSA.', starterCode: '', difficulty: 'hard', xpReward: 50, hints: ['Best practice for large data.'] },
          { id: 'cry-3-8', title: 'Large File', description: 'Encrypt large file using Hybrid.', starterCode: '', difficulty: 'hard', xpReward: 60, hints: ['AES for file, RSA for AES key.'] },
          { id: 'cry-3-9', title: 'Crack RSA', description: 'Crack small RSA keypair (Educational).', starterCode: '', difficulty: 'hard', xpReward: 50, hints: ['Factorize N.'] },
          { id: 'cry-3-10', title: 'Speed Test', description: 'Benchmark RSA key sizes.', starterCode: 'import time\n', difficulty: 'medium', xpReward: 30, hints: ['Time generation/enc/dec.'] },
        ]
      }
    ]
  }
];

export const MOCK_USER_STATS = {
  xp: 1250,
  streak: 5,
  completed: ['py-1-1', 'py-1-2'],
  rank: 42
};