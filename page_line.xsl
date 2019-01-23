<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding="utf-8" />
<xsl:template match="/">
	<html>
		<body>    
		<p>
			<xsl:apply-templates select="TEI/body" />
		</p>
	</body>
	</html>
	
</xsl:template>

<xsl:template match="lb">
	<br /><xsl:value-of select="./@n[.=5]" />:
</xsl:template>

<xsl:template match="pb">
	<br />p.<xsl:value-of select="./@n" />
</xsl:template>

</xsl:stylesheet>
