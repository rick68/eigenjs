{
  "targets": [
    {
      "target_name": "eigen",
      "sources": [
        "src/eigen.cpp"
      ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
