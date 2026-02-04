import json
import re

# Read the original file
with open('data/trips.json.backup', 'r', encoding='utf-8') as f:
    content = f.read()

# Step 1: Fix multiline descriptions by joining lines
lines = content.split('\n')
fixed_lines = []
i = 0

while i < len(lines):
    line = lines[i]
    
    # Check if this is a description field that spans multiple lines
    if '"description":' in line and not line.strip().endswith('",'):
        # Accumulate the multi-line string
        desc_parts = [line.split('"description": "')[1] if '"description": "' in line else line.strip()]
        i += 1
        while i < len(lines) and not lines[i].strip().endswith('",'):
            desc_parts.append(lines[i].strip())
            i += 1
        if i < len(lines):
            desc_parts.append(lines[i].strip().rstrip('",'))
            # Join with spaces and create a single line
            full_desc = ' '.join(desc_parts).strip()
            indent = ' ' * (len(line) - len(line.lstrip()))
            fixed_lines.append(f'{indent}"description": "{full_desc}",')
            i += 1
    else:
        fixed_lines.append(line)
        i += 1

content = '\n'.join(fixed_lines)

# Step 2: Try to parse and validate
try:
    data = json.loads(content)
    print(f"✓ Successfully fixed JSON with {len(data)} islands")
    
    # Add missing fields to old data
    for island in data:
        for package in island['packages']:
            if 'meals' not in package:
                package['meals'] = []
            if 'highlights' not in package:
                package['highlights'] = []
            if 'facilitiesExclude' not in package:
                package['facilitiesExclude'] = package.get('facilities exclude', [])
                if 'facilities exclude' in package:
                    del package['facilities exclude']
    
    # Write the fixed version
    with open('data/trips.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print(f"✓ Written fixed JSON to data/trips.json")
    
    # Validate one more time
    with open('data/trips.json', 'r', encoding='utf-8') as f:
        validation = json.load(f)
    print(f"✓ Final validation: {len(validation)} islands, {sum(len(i['packages']) for i in validation)} packages")
    
except Exception as e:
    print(f"✗ Error: {e}")
    import traceback
    traceback.print_exc()
