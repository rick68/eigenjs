{
  "targets": [
    {
      "target_name": "eigen",
      "sources": [
        "src/eigen.cc"
      ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
