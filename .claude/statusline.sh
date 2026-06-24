#!/bin/sh
input=$(cat)

# Git branch (from the git command, not JSON - jq may not have branch info)
branch=$(git -C "$(echo "$input" | jq -r '.cwd // empty')" --no-optional-locks branch --show-current 2>/dev/null)

# Context window usage percentage (pre-calculated)
used=$(echo "$input" | jq -r '.context_window.used_percentage // empty')

# Rate limit: 5-hour session usage
five_pct=$(echo "$input" | jq -r '.rate_limits.five_hour.used_percentage // empty')

# Build output
parts=""

if [ -n "$branch" ]; then
  parts="$branch"
fi

if [ -n "$used" ]; then
  ctx="ctx:$(printf '%.0f' "$used")%"
  parts="${parts:+$parts  }$ctx"
fi

if [ -n "$five_pct" ]; then
  limit="day:$(printf '%.0f' "$five_pct")%"
  parts="${parts:+$parts  }$limit"
fi

printf '%s' "$parts"
