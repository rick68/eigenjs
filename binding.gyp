{
  "targets": [
    {
      "target_name": "eigen",
      "sources": [
        "src/EigenJS.cpp"
      ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
